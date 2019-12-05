export class Ligacao {
    constructor(
        public origem: number,
        public destino: number,
        public tempo: number,
        public plano: string,
        public valorComFaleMais?,
        public valorSemFaleMais?
      ) {  }
}
