const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The /api/tags endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      }
    ]
  })
  res.json(data)
});

router.get('/:id', async(req, res) => {
  // find a single tag by its id
  // be sure to include its associated Product data
  const data = await Tag.findOne({
    where: {
      id: req.params.id
    }
  },
  {
    include: [
      {
        model: Product, 
        through: ProductTag, 
      }
    ]
  })
  res.json(data)
});

router.post('/', async(req, res) => {
  // create a new tag
  const data = await Tag.create(
    req.body
  )
  res.json(data)
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its id value
  const data = await Tag.update({
    where: {
      id: req.params.id
    }
  }, req.body)

  res.json(data)
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its id value
 const data = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(data)
});


module.exports = router;
