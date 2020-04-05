export class AboutDetails{

    private title: String;
    private author: String;
    private description: String;

    /**
     * constructor
     */
    public constructor(title:String,author:String,desc:String) {
        this.title = title;
        this.author = author;
        this.description = desc;
    }

    public getTitle(): String {
        return this.title;
    }    
    
    public getAuthor(): String {
        return this.author;
    }    
    
    public getDesc(): String {
        return this.description;
    }

}