export class CourseModel {
    id?: number;
    creator?: string;
    name?: string;
    description?: string;
    status?: string = "En construcción";
    startDate?: Date;
    endDate?: Date;
}