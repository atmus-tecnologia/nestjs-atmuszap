import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InstanceDto } from '../dto/instance.dto';
import { ApiResult, AtmusZapResponseError } from '../types';
import { InstanceCreated } from '../types/instances/create';
import { InstanceInfo } from '../types/instances/fetch';

@Injectable()
export class InstancesService {
  constructor(private readonly httpService: HttpService) {}

  create(data: InstanceDto) {
    return new Promise<InstanceCreated>((resolve, reject) => {
      this.httpService.post<InstanceCreated>('/instance/create', data).subscribe({
        next: ({ data }) => resolve(data),
        error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
      });
    });
  }

  fetchInstances(instanceName?: string) {
    return new Promise<InstanceInfo[]>((resolve, reject) => {
      this.httpService.get<InstanceInfo[]>(`/instance/fetchInstances`, { params: { instanceName } }).subscribe({
        next: ({ data }) => resolve(data),
        error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
      });
    });
  }

  connect(instanceName: string, instanceKey: string) {
    return new Promise<InstanceInfo>((resolve, reject) => {
      this.httpService
        .get<InstanceInfo>(`/instance/connect/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  restart(instanceName: string, instanceKey: string) {
    return new Promise<InstanceInfo>((resolve, reject) => {
      this.httpService
        .put<InstanceInfo>(`/instance/restart/${instanceName}`, null, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  connectionState(instanceName: string, instanceKey: string) {
    return new Promise<InstanceInfo>((resolve, reject) => {
      this.httpService
        .get<InstanceInfo>(`/instance/connectionState/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  logout(instanceName: string, instanceKey: string) {
    return new Promise<ApiResult>((resolve, reject) => {
      this.httpService
        .delete<ApiResult>(`/instance/logout/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }

  delete(instanceName: string, instanceKey: string) {
    return new Promise<ApiResult>((resolve, reject) => {
      this.httpService
        .delete<ApiResult>(`/instance/delete/${instanceName}`, {
          headers: { Authorization: `Bearer ${instanceKey}` },
        })
        .subscribe({
          next: ({ data }) => resolve(data),
          error: ({ response: { data } }: AtmusZapResponseError) => reject(data),
        });
    });
  }
}
