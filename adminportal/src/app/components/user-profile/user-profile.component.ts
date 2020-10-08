import { Component, OnInit } from '@angular/core';
import { PortalSyncService } from '../../services/portal-sync.service';
import { PortalSync } from '../../interfaces/responses/PortalSync';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public portalSync: PortalSync;
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("appVersion", "dataVersion", "JWT").subscribe((data) => (this.portalSync = data));;
  }

}
