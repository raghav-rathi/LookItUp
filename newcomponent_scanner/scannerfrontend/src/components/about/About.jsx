import React from 'react'

const About = () => {
  return (
    <div>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
    </head>
    <main role="main">
<div class="jumbotron">
  <div class="container">
    <h1 class="display-3">LookItUp</h1>
    <p>LookItUp is a web and mobile application that allows its users to scan the ingredient list of their cosmetic and grocery products
       to check for harmful compositions. It will categorize the components of the product as Safe or Harmful. Further you can look up
        the use case of each component used in the product and how it is manufactured. If the product contains harmful components, then 
        the user will have the option to look up safe alternatives. Ratings of the product will also be displayed to the user based on 
        safety composition(accuracy improves as our database expands)</p>
    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
  </div>
</div>

<div class="container">
  
  <div class="row">
    <div class="col-md-4">
      <h2>Reliability</h2>
      <p>
        Our service provides reliable results by comparing the ingredients against our well articulated database which continues to improve as it keeps expanding. 
      </p>
    </div>
    <div class="col-md-4">
      <h2>Contact Us</h2>
      <p>If you have any queries regarding the service provided my LookItUp, we would be happy to help you out. Simply click on the contact us button present at the top of the page and fill out the form and our team will contact you to provide you with the best service possible. </p>
    </div>
  </div>

</div> 

</main>    




    </div>
  )
}

export default About