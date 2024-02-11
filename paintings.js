const images = [
    {title: 'Mona Lisa', author: 'Leonardo da Vinci', year: 1503},
    {title: 'The Last Supper', author: 'Leonardo da Vinci', year: 1495},
    {title: 'Starry Night', author: 'Vincent van Gogh', year: 1889},
    {title: 'The Scream', author: 'Edvard Munch', year: 1893},
    {title: 'Guernica', author: 'Pablo Picasso', year: 1937},
    {title: 'The Kiss', author: 'Gustav Klimt', year: 1907},
    {title: 'Girl With a Pearl Earring', author: 'Johannes Vermeer', year: 1665},
    {title: 'The Birth of Venus', author: 'Sandro Botticelli', year: 1485},
    {title: 'Las Meninas', author: 'Diego Velázquez', year: 1656},
    {title: 'The Creation of Adam', author: 'Michelangelo', year: 1512}
];

images.forEach(image => {console.log(`${image.title}
(${image.author}, ${image.year})`)});


// The ImageCl is the class with constructor
class ImageCl {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

// The Image function is the constructor
let Image  = function(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
}

// getImage is the factory
let getImage = function(title, author, year) {
    return {
        title,
        author,
        year
    }
}

const images1 = [];
const images2 = [];


images.forEach(image => images1.push(new Image(image.title, image.author, image.year)));
images1.forEach(image => images2.push(getImage(image.title, image.author, image.year)));
images2.forEach(image => {console.log(`${image.title} (${image.author}, ${image.year})`)});

let myImages = {
    list: [],
    contains: function(title) {
        let isInList = false;
        for (image of this.list) {
            if (image.title === title){
                isInList = true;
                break;
            }
        }
        return isInList;
    },
    add: function(title, author, year) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, author, year));
        }
    },
    show: function() {
        if (this.list.length > 0) {
            this.list.forEach(image => {console.log(`${image.title} (${image.author}, ${image.year})`)});
        } else {
            console.log('The list of images is empty');
        }
    },
    clear: function(){
        this.list.splice(0, this.list.length);
    }
}

myImages.add('Mona Lisa', 'Leonardo da Vinci', 1503);
myImages.add('The Last Supper', 'Leonardo da Vinci', 1495);
myImages.add('The Starry Night', 'Vincent van Gogh', 1889);
myImages.add('Mona Lisa', 'Leonardo da Vinci', 1503);
myImages.show();
myImages.clear();
myImages.show();

// edit - if it finds an image with the given title in the list, it changes its author and year properties

myImages.edit = function(title, author, year) {
    for(image of this.list) {
        if(image.title === title) {
            image.author = author;
            image.year = year;
            break;
        }
    }
}


// delete - if it finds a picture with this title in the list, it deletes it
myImages.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}

// Add a show method to the Image constructor, which will display information about this one image. Use prototypes for this purpose
Image.prototype.show = function() {
    console.log(`${this.title} (${this.author}, ${this.year})`);
}

//Modify the show method of the images object so that it uses the newly created single image show method to display the information
myImages.show = function() {
    if (this.list.length > 0) {
        this.list.forEach(image => image.show());
    } else {
        console.log('The list of images is empty');
    }
}

myImages.add('Mona Lisa', 'Leonardo da Vinci', 1503);
myImages.add('The Last Supper', 'Leonardo da Vinci', 1495);
myImages.add('The Starry Night', 'Vincent van Gogh', 1889);
myImages.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
myImages.delete('The Last Supper');
myImages.show();
