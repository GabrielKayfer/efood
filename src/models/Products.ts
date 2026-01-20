class Product {
    title: string
    description: string
    image: string
    id: number

    constructor(id: number, title: string, description: string, image: string) {
        this.id = id
        this.description = description
        this.image = image
        this.title = title
    }
}

export default Product