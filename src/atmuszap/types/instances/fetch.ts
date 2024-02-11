export interface InstanceInfo {
  instance: Instance;
}

export interface Instance {
  instanceName: string;
  instanceId?: string;
  owner?: string;
  profileName?: string;
  profilePictureUrl?: string;
  profileStatus?: string;
  status?: string;
  state?: string;
  serverUrl?: string;
}
