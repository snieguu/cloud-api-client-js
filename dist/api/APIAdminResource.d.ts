import APIList from './APIList';
import APIResource from './APIResource';
import APIResourceFile from './APIResourceFile';
import APIResourceProject from './APIResourceProject';
import APIResourceAccessGroup from './APIResourceAccessGroup';
import APIAdminListRuns from './APIAdminListRuns';
import APIAdminResourceCluster from './APIAdminResourceCluster';
import APIAdminResourceDeviceTime from './APIAdminResourceDeviceTime';
import APIAdminResourceRunStandalone from './APIAdminResourceRunStandalone';
import APIAdminResourceDevice from './APIAdminResourceDevice';
import APIAdminResourceAccountService from './APIAdminResourceAccountService';
import APIAdminResourceUser from './APIAdminResourceUser';
import APIAdminResourceDeviceSessionStandalone from './APIAdminResourceDeviceSessionStandalone';
import { PoolsRangeData } from './interface/BrowsersPool';
declare class APIAdminResource extends APIResource {
    constructor(parent: object);
    accessGroups(): APIList;
    accessGroup(id: number): APIResourceAccessGroup;
    accounts(): APIList;
    account(id: number): APIResource;
    accountServices(): APIList;
    accountService(id: number): APIAdminResourceAccountService;
    activities(): APIList;
    billingPeriods(): APIList;
    billingPeriod(id: number): APIResource;
    browserPools(): APIList;
    poolsRange(data: PoolsRangeData): APIResource;
    clusters(): APIList;
    cluster(id: number): APIAdminResourceCluster;
    countryVatRates(): APIList;
    countryVatRate(id: number): APIResource;
    devices(): APIList;
    device(id: number): APIAdminResourceDevice;
    deviceModels(): APIList;
    deviceModel(id: number): APIResource;
    deviceModelCriterias(): APIList;
    deviceModelCriteria(id: number): APIResource;
    deviceSessions(): APIList;
    deviceSession(id: number): APIAdminResourceDeviceSessionStandalone;
    deviceStatuses(): APIList;
    deviceTime(): APIAdminResourceDeviceTime;
    interactiveQueue(): APIList;
    files(): APIList;
    file(id: number): APIResourceFile;
    overview(): APIResource;
    projects(): APIList;
    project(id: number): APIResourceProject;
    runs(): APIAdminListRuns;
    run(id: number): APIAdminResourceRunStandalone;
    users(): APIList;
    createUser(): APIList;
    user(id: number): APIAdminResourceUser;
}
export default APIAdminResource;
