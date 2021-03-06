const remoteURL = "http://localhost:5002"

export default {

    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
    },

    getProduct(id) {
        return fetch(`${remoteURL}/products/${id}`).then(e => e.json())
    },

    getLead(id) {
        return fetch(`${remoteURL}/leads/${id}`).then(e => e.json())
    },

    getSale(id) {
        return fetch(`${remoteURL}/sales/${id}`).then (e => e.json())
    },

    getAllUsers: () => {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },

    getAllProducts() {
        return fetch(`${remoteURL}/products`).then(e => e.json())
    },

    getAllLeads() {
        return fetch(`${remoteURL}/leads`).then(e => e.json())
    },

    getUserProducts() {
        return fetch(`${remoteURL}/userProducts`).then(e => e.json())
    },

    getAllPurchases() {
        return fetch(`${remoteURL}/purchases`).then(e => e.json())
    },

    getAllSales() {
        return fetch (`${remoteURL}/sales`).then(e => e.json()) 
    },
    
    getUserPurchases() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/purchases?userId=${sessionId}`).then(e => e.json())
    },

    getUserProducts() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/products?userId=${sessionId}`).then(e => e.json())
    },

    getUserLeads() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/leads?userId=${sessionId}`).then(e => e.json())
    },

    getUserSales() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/sales?userId=${sessionId}`).then(e => e.json())
    },
    
    getUserDriveTickets() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/probabilityDriveTickets?userId=${sessionId}`).then(e => e.json())
    },

    getUserPurchaseTickets() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/purchaseTickets?userId=${sessionId}`).then(e => e.json())
    },

    getUserSales() {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`${remoteURL}/sales?userId=${sessionId}`).then(e => e.json())
    },

    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(e => e.json())
    },

    postNewProduct(newProduct) {
        return fetch(`${remoteURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(e => e.json())
    },

    postNewLead(newLead) {
        return fetch(`${remoteURL}/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLead)
        }).then(e => e.json())
    },

    postNewPurchaseTicket(newPurchaseTicket) {
        return fetch(`${remoteURL}/purchaseTickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchaseTicket)
        }).then(e => e.json())
    },

    postNewSale(newSale) {
        return fetch(`${remoteURL}/sales`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSale)
        }).then(e => e.json())
    },

    putProduct(editedProduct) {
        return fetch(`${remoteURL}/products/${editedProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProduct)
        }).then(e => e.json())
    },

    putLead(editedLead) {
        return fetch(`${remoteURL}/leads/${editedLead.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedLead)
        }).then(e => e.json())
    },

    putPurchase(editedPurchase) {

        return fetch(`${remoteURL}/purchases/${editedPurchase.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPurchase)
        }).then(e => e.json())
    },

    putDriveTicket(editedDriveTicket) {

        return fetch(`${remoteURL}/probabilityDriveTickets/${editedDriveTicket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedDriveTicket)
        }).then(e => e.json())
    },

    putSale(editedSale) {

        return fetch(`${remoteURL}/sales/${editedSale.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedSale)
        }).then(e => e.json())
    },

    deleteProduct(id) {
        return fetch(`${remoteURL}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))
    },

    deleteLead(id) {
        return fetch(`${remoteURL}/leads/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))
    },

    deleteUserProduct(id) {
        return fetch(`${remoteURL}/userProducts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))
    },

    deleteDriveTicket(id) {
        return fetch(`${remoteURL}/probabilityDriveTickets/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))    
    },

    deleteSale(id) {
        return fetch(`${remoteURL}/sales/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json(0))    
    },

    deletePurchase(id) {
        return fetch(`${remoteURL}/purchases/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(e => e.json())
    }
}