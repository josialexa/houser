module.exports = {
    read: (req, res) => {
        const db = req.app.get('db')

        db.get().then(houses => res.status(200).json(houses))
    },

    create: (req, res) => {
        const {name, address, city, state, zip, img, mortgage, rent} = req.body
        const db = req.app.get('db')

        db.add(name, address, city, state, +zip, img, +mortgage, +rent)
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(400).send('Unable to add property')
            })
    },

    delete: (req, res) => {
        const id = req.params.id
        const db = req.app.get('db')

        db.delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log(err)
                res.status(400).send('Unable to delete property')
            })
    }
}