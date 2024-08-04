import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <h5 class="card-title">Proshop Special</h5>
      <p class="card-text">Shopping is good day with love</p>
      <a href="#" class="btn btn-primary">Go Commiunity</a>
    </div>
  </div>
  );
}

export default Footer;
