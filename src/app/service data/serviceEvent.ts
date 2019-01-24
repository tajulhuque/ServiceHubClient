import { RetentionPolicy } from "./retentionPolicy";


export class ServiceEvent {

    appName: string;

    description: string;

    logEntry: string;

    type: number;

    severity: number;

    createDate: Date;

    retentionPolicy: RetentionPolicy;

    // constructor(description: string, 
    //             logentry: string, 
    //             type: number, 
    //             severity: number,
    //             appName: string,
    //             createDate: Date) {

    //     this.description = description;
    //     this.logEntry = logentry;
    //     this.type = type;
    //     this.severity = severity;
    //     this.appName = appName;
    //     this.createDate = createDate;
    // }

  }
