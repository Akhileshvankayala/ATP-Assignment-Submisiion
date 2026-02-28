class Book{
    title;
    author;
    pages;
    isAvailable=true;
    static count=0;
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
    borrow(){
        console.log(this.title,"borrowed")
        this.isAvailable=false;
    }
    returnBook(){
        console.log(this.title,"returned");
        this.isAvailable=true;
    }
    getInfo(){
        console.log(this.title,"by", this.author,"has", '(',this.pages,")");
        console.log(`available:${this.isAvailable}`)
    }
    isLongBook(){
        if(pages>300){
            Book.count++;
            return true;
        }
        return false;
    }
    availableBooks(){
        if(this.isAvailable){
            console.log(`${this.title} by ${this.author} has (${this.pages})`)
        }
    }
    static countBooks(){
        console.log("count",Book.count)
    }
}
let bookObj1=new Book("book1","author1",100)
let bookObj2=new Book("book2","author2",200)
let bookObj3=new Book("book3","author3",300)
let bookObj4=new Book("book4","author4",400)
let bookObj5=new Book("book5","author5",500)
//display
bookObj1.getInfo();
bookObj2.getInfo();
bookObj3.getInfo();
bookObj4.getInfo();
bookObj5.getInfo();
bookObj1.borrow();
bookObj2.borrow();
bookObj2.returnBook();
bookObj1.availableBooks();
bookObj2.availableBooks();
bookObj3.availableBooks();
bookObj4.availableBooks();
bookObj5.availableBooks();
Book.countBooks();