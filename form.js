class Form 
{
    constructor()
    {
        this.input = createInput("Username");
        this.input2 = createInput("Password");
        this.head = createElement('h2');

    }

    display()
    {
        this.head.html("SIGN IN")
        this.head.position(300, 400)
        this.input.position(17, 450)
        this.input2.position(17 , 500)
    }
}