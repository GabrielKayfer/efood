class Restaurant {
    title: string
    nota: string
    description: string
    categories: string[]
    image: string
    id: number

    constructor(id: number, title: string, description: string, categories: string[], nota: string, image: string) {
        this.id = id
        this.categories = categories
        this.description = description
        this.image = image
        this.nota = nota
        this.title = title
    }
}

export default Restaurant