const Menu = require('./../models/menuModel.js')

let addItem = async (req,res) => {
    try {

        const {name, discreption, price, category} = req.body

        if (!name || !price) {
            return res.status(400).json({
                message: "name and price are required"
            })
        }

        const newItem = new Menu({
            name,
            discreption,
            price,
            category
        })

        const done = await newItem.save()
        res.status(200).json({
            message : "the item has been added successfully",
            data: done
        })
    } catch(er) {
        console.log(er.message ? er.message : er)
        res.status(500).json({
            message : "server error"
        })
    }
}

let updateItem = async (req,res) => {
    try {
        const {id} = req.params
        const {name, description, price, category} = req.body

        const updateItem = await Menu.findByIdAndUpdate(
            id,
            {name, description, price, category},
            {new : true}
        )

        if (!updateItem) {
            return res.status(400).json({
                message : "menu item not found"
            })
        }

        res.status(200).json({
            message : "menu item updated successfully", 
            data : updateItem
        })

    } catch(er) {

        console.log(er.message ? er.message : er) 
        res.status(500).json({
            message : "server error",
            data : er
        })

    }
}

let deleteItem = async (req,res) => {
    try{
        const {id} = req.params

        const deleteItem = await Menu.findByIdAndDelete(id)

        if (!deleteItem) {
            res.status(400).json({
                message : "menu item not found"
            })
        }

        res.status(200).json({
            message : "item deleted successfully"
        })

    } catch(er) {

        console.log(er.message ? er.message : er)
        res.status(500).json({
            message : "server error",
            data : er
        })

    }
}

let getMenu = async (req,res) => {
        try { 
            const menuItems = await Menu.find()
             res.status(200).json(menuItems)
        } catch(er) {
            console.log(er.message ? er.message : er)

            res.status(500).json({
                message : "server error",
                data : er.message ? er.message : er
            })
        }
}

module.exports = {
    addItem,
    updateItem,
    deleteItem,
    getMenu
}