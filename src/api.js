const FoodAPI = {
  foods: [
    {
      id: "1", isNew: true, image: "images/1.jpg", title: "title 1", description: "description 1"
    },
    {
      id: "2", isNew: true, image: "images/2.jpg", title: "title 2", description: "description 2"
    },
    {
      id: "3", isNew: true, image: "images/3.jpg", title: "title 3", description: "description 3"
    },
    {
      id: "4", isNew: false, image: "images/4.jpg", title: "title 4", description: "description 4"
    },
    {
      id: "5", isNew: false, image: "images/5.jpg", title: "title 5", description: "description 5"
    },
    {
      id: "6", isNew: false, image: "images/6.jpg", title: "title 6", description: "description 6"
    },
    {
      id: "7", isNew: false, image: "images/7.jpg", title: "title 7", description: "description 7"
    },
    {
      id: "8", isNew: false, image: "images/8.jpg", title: "title 8", description: "description 8"
    },
    {
      id: "9", isNew: false, image: "images/9.jpg", title: "title 9", description: "description 9"
    }
  ],
  all: function() { return this.foods}
}

export default FoodAPI
