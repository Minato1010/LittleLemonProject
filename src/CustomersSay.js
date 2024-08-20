
function Customers() {
   const customers = [{ name: "Pepe", review: "From the moment I walked in, the cozy atmosphere made me feel right at home.  I will definitely return to try other dishes on the menu", rate: 4, img: require("./icons_assets/pepe.png") },
   { name: "Juan", review: "The service was quick and friendly, which made the experience even better. Highly recommended!", rate: 3, img: require("./icons_assets/juan.png") },
   { name: "Jose", review: "The staff was very attentive and made sure everything was to my liking. Without a doubt, a restaurant I will return to.", rate: 5, img: require("./icons_assets/jose.png") },
   { name: "Pedro", review: "The ambiance was elegant yet relaxed, perfect for a special night out. I can't wait to go back and explore more of the menu.", rate: 4, img: require("./icons_assets/pedro.png") }
   ];

   return (
      <>
         <br />
         <h1 style={{ textAlign: "center" }}>Testimonials</h1>
         
            {customers ? (
               <div className='box'>
               {customers.map((customer) =>
                  <div className='test'>
                     <h3>
                        Rating {customer.rate}
                     </h3>
                     <div><img src={customer.img} className='user'  /> {customer.name}</div>
                     <p>{customer.review}</p>
                  </div>
                  )};

               </div>) :
               (<div>
                  xd
               </div>)


            }
      </>

   );

}
export default Customers;
