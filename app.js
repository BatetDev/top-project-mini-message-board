const path = require('node:path');
const express = require('express');
const app = express();

const messages = [
  {
    text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique earum, beatae commodi eveniet autem iusto vitae explicabo iste facere ea illo quaerat ipsum fuga dolor nisi quasi, ut ullam a aut. Sequi, repellendus deserunt mollitia eius nam laboriosam sunt tempora soluta cum esse numquam adipisci quam sapiente accusantium dolorem laudantium. Repudiandae culpa vero soluta aperiam placeat odio itaque facere quam est maxime optio excepturi natus voluptatibus blanditiis, delectus deserunt, aliquid libero labore assumenda. Magni, eligendi quae minima dolorum sapiente nam ab cupiditate earum repellat tenetur impedit obcaecati totam ea commodi laborum doloremque quod vel praesentium repudiandae velit. Fuga, quis.',
    user: 'Amado',
    added: new Date(),
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates eius pariatur autem libero id numquam blanditiis quasi assumenda veritatis magnam, hic eveniet vel harum exercitationem sed quibusdam alias culpa quidem temporibus facilis, sequi quaerat sit explicabo! Minus ex optio deleniti quis sint libero mollitia animi facere itaque! Ad, tempora. Perferendis ullam voluptatibus, corporis exercitationem deleniti dignissimos doloremque sint, ut explicabo atque repudiandae, voluptate amet quos eveniet sunt animi quibusdam quo? Quas animi officiis laborum distinctio tempore ad aut dolor officia illo a similique nulla neque beatae sed, repudiandae magni.',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae blanditiis officia aliquid similique quo consequatur ducimus, eos iusto! Similique, numquam accusantium facilis dignissimos suscipit, adipisci optio non perspiciatis blanditiis consequatur totam quod! Unde soluta tempore deleniti enim reprehenderit vel impedit quisquam explicabo quis nulla iste eaque necessitatibus voluptatum, animi voluptatem officia repudiandae praesentium deserunt. Eius soluta nulla delectus blanditiis labore, autem doloribus cumque recusandae ad natus! Rem sequi atque fugit quo, deleniti modi maxime ipsam ut obcaecati vel ex dicta eligendi temporibus aliquid voluptatem nam? Commodi quod fugit vel maxime cum blanditiis obcaecati veritatis!',
    user: 'Cosimus',
    added: new Date(),
  },
];

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { messages });
});
app.get('/new', (req, res) => res.render('form'));

app.post('/new', (req, res) => {
  const { username, message } = req.body;
  messages.push({
    text: message,
    user: username,
    added: new Date(),
  });
  res.redirect('/');
});

app.get('/message/:id', (req, res) => {
  const message = messages[Number(req.params.id)];
  res.render('message', { message });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
