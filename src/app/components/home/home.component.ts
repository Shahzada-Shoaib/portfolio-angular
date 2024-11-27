import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'
import { HeroSectionComponent } from '../hero-section/hero-section.component'
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component'
import { ProjectsSectionComponent } from '../projects-section/projects-section.component'
import { TestimonialSectionComponent }  from '../testimonial-section/testimonial-section.component'
import { FooterComponent } from '../footer/footer.component'
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, AboutMeSectionComponent, ProjectsSectionComponent, TestimonialSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
