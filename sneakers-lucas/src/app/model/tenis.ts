export class Tenis{
    public id!: number;
    public nome!: string;
    public descricao!: string;
    public preco!: string;
    public imagem!: string;

    constructor(id: number, nome: string, descricao: string, preco: string, imagem: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }
}