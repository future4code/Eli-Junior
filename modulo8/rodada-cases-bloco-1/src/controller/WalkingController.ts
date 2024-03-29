import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/WalkingBusiness";
import { DogWalkingDatabase } from "../data/WalkingDatabase";
import { InvalidData, InvalidPet, InvalidTime } from "../error/customError";
import { walkingInputDTO } from "../model/walking";

export class WalkingController {
    public createWalking = async (req: Request, res: Response): Promise<void> => {
        try {
            if (req.body.pets < 1) {
                throw new InvalidPet();
            }
            if (
                !req.body.data_agendamento ||
                !req.body.duracao ||
                !req.body.latitude ||
                !req.body.longitude ||
                !req.body.pets ||
                !req.body.hora_inicio ||
                !req.body.hora_termino
            ) {
                throw new InvalidData();
            }
            if (req.body.duracao != "00:30:00" && req.body.duracao != "01:00:00") {
                throw new InvalidTime();
            }
            const {
                data_agendamento,
                duracao,
                latitude,
                longitude,
                pets,
                hora_inicio,
                hora_termino,
            } = req.body;

            const input: walkingInputDTO = {
                data_agendamento,
                duracao,
                latitude,
                longitude,
                pets,
                hora_inicio,
                hora_termino,
            }

            const dogWalkingBusiness = new DogWalkingBusiness();
            dogWalkingBusiness.createWalking(input);

            res.status(201).send({ message: "Passeio criado com sucesso!" });
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        }
    }

    public showWalking = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
            }

            const duracao = await new DogWalkingDatabase().showWalking(input);
    
            res.send(duracao).status(200);
        } catch (error: any) {
            res
                .send({ message: error.message })
                .status(error.sqlMessage || error.message);
        }
    }
    
    public startWalking = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
            } 

            const inicio = await new DogWalkingDatabase().startWalking(input);

            res.send(inicio).status(200);

        } catch (error: any) {
            res
                .send({ message: error.message })
                .status(error.sqlMessage || error.message);
        }        
    }

    public finishWalking = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
            };
            const termino = await new DogWalkingDatabase().finishWalking(input);
    
            res.send(termino).status(200);
        } catch (error: any) {
            res
                .send({ message: error.message })
                .status(error.sqlMessage || error.message);
        }
    }

    public allWalking = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id: req.params.id,
            };
            const termino = await new DogWalkingDatabase().allWalking(input);
    
            res.send(termino).status(200);
            } catch (error: any) {
            res
                .send({ message: error.message })
                .status(error.sqlMessage || error.message);
        }
    }
}