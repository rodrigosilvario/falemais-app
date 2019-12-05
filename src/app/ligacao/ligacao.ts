export class Ligacao {
    constructor(
        public origem: number,
        public destino: number,
        public tempo: number,
        public plano: string,
        public valorComFaleMais?: number,
        public valorSemFaleMais?: number
      ) {  }
}
