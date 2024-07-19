/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems, visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */

type TipasNaudoti = {
  marke: string;
  modelis: string;
  metai: number;
  spalva: string;
  kilometrazas: number;
};

type DviratisType = Omit<TipasNaudoti, "marke" | "modelis" | "kilometrazas">;

const dviratis: DviratisType = {
  metai: 1999,
  spalva: "",
};

type NaujaMasinaType = Omit<TipasNaudoti, "kilometrazas">;

const naujaMasina: NaujaMasinaType = {
  marke: "",
  modelis: "",
  metai: 2025,
  spalva: "",
};

type SenaMasinaType = TipasNaudoti & {
  surudyjesDugnas: boolean;
};

const senaMasina: SenaMasinaType = {
  marke: "",
  modelis: "",
  metai: 2025,
  spalva: "",
  kilometrazas: 999999,
  surudyjesDugnas: true,
};
