import { SearchFern } from './searchfern';
import $ from 'jquery';
import './styles.css';


$(document).ready(function () {

  let search = new SearchFern();
  let promise = search.returnTheFern();

  promise.then(function (response) {
    // make list with different types (assumes each object is assigned a type)
    let mainbody = JSON.parse(response);
    let body = mainbody.body.data;

    // chair, sofa, rug, table -- more will be added if more types are added to the api
    let nav = [];
    for (let i=0; i<body.length; i++) {
      if (!nav.includes(body[i].type)) {  // make new category if needed
        nav.push(body[i].type);
      }
    }

    // for each index in the nav array (of all types) make a button
    nav.forEach(function(type) {
      $('#nav').append(`<button class=selectNavItem id=${type}>${type}_</button>`);
    });

    // if user clicks nav button, assigned the class .selectNavItem show the deets
    $('.selectNavItem').click(function() {
      $('#deets').empty();
      for (let i=0; i<body.length; i++) {
        if (body[i].type === this.getAttribute('id')) {
          $("#deets").append(`
                <li id=name>${body[i].name}</li>
                <li id="id">id_ ${body[i].id}</li>
                <img id=image src=${body[i].imageUrl}>
                <li id=description>${body[i].description}</li>
                <li id=cost>cost_ ${body[i].cost}</li>          
                <li id=stock>stock_ ${body[i].stock}</li>
                <li id=color>colors_ ${body[i].colors.join(" + ")}</li>`
          );
          if (body[i].dimensions) { $("#deets").append(`<li id=dimensions>dimensions_ ${body[i].dimensions.width} x ${body[i].dimensions.length}</li>`); }
          if (body[i].deliverable === true) { $("#deets").append(`<li class=deliverable>deliverable_</li>`); } else { $("#deets").append(`<li class=deliverable>not deliverable_</li>`); }
        }
      }
    });
  })
})
