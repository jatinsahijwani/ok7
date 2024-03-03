import "./Footer.css"
import { IconBrandInstagram,IconBrandLinkedin,IconBrandTwitter } from "@tabler/icons-react"
import React from 'react'

const Footer = () => {
  return (
      <footer class="footer">
  	 <div class="container">
  	 	<div class="row ml-10">
  	 		<div class="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
  	 				<li><a href="/about">About us</a></li>
  	 				<li><a href="#">Services</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 				<li><a href="#">Affiliate Program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Opportunities</h4>
  	 			<ul>
  	 				<li><a href="/career">Careers</a></li>
  	 				<li><a href="#">Learning Programs</a></li>
  	 				<li><a href="#">Internships</a></li>
  	 				<li><a href="#">Verify Certificate</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#">+91 93265 85682</a></li>
  	 				<li><a href="#">sales.ok7@gmail.com</a></li>
  	 				<li><a href="#">admin.ok7@gmail.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Follow Us</h4>
  	 			<div class="social-links flex gap-2">
  	 				<IconBrandInstagram />
                    <IconBrandLinkedin />
                    <IconBrandTwitter />
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer
