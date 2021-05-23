import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavItem } from '../model/nav-item';
import { Router } from '@angular/router';
import { NavService } from '../service/nav.service';
import { MatDialog } from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-menu-list-item-child',
  templateUrl: './menu-list-item-child.component.html',
  styleUrls: ['./menu-list-item-child.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class MenuListItemChildComponent implements OnInit {
  expanded: boolean = false;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(
    public navService: NavService,
    public router: Router,
    private dialog: MatDialog
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.getCurrentUrl().subscribe((url: string) => {
      if (this.item.route) {
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: NavItem) {
    this.dialog.closeAll();

    if (!item.children || !item.children.length) {
      if (item.route) {
        this.router.navigate([item.route]);
      } else {
        this.handleSpecial(item);
      }
    }

    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

  handleSpecial(item: NavItem) {}
}
