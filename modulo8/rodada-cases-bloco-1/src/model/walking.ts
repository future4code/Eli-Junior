export type walking = {
    id: string,
    Status: STATUS_TYPES.PENDENTE;
    data_agendamento: Date;
    preco: number;
    duracao: string;
    latitude: number;
    longitude: number;
    pets: number;
    hora_inicio: string;
    hora_termino: string;
}

export interface walkingInputDTO {
    data_agendamento: Date;
    duracao: string;
    latitude: number;
    longitude: number;
    pets: number;
    hora_inicio: string;
    hora_termino: string;
}

enum STATUS_TYPES {
    PENDENTE = "Pendente",
    ANDAMENTO = "Em Andamento",
    CONCLUIDO = "Concluído",
}