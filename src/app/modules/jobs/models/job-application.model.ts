import { User } from "../../users/models/user.model";

export interface JobApplication {
    id: number;
    job_id: number;
    user_id: number;
    users: User;
    status: string;
}