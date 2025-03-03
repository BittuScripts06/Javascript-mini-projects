function generate() {
    var quotes = {
        "-Deepak chopra": '"Man will never be free until the last king is strangled with the entrails of the last priest"',

        "-Albert": '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',

        "-lewis B": '"To forgive is to set a prisoner free and discover that the prisoner was you."',

        "-Voltaire J": '"It is difficult to free fools from the chains they reverse"',

        "-Maya Agelou": '"A people free to choose will always choose peace."'
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)]
    var quote = quotes[author];


    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
