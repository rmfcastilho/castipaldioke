import pandas as pd
from collections import defaultdict
import json

def extract_xls_data(path):
    if path.endswith(".xls"):
        df = pd.read_excel(path, engine="xlrd")
    else:
        df = pd.read_excel(path, engine="openpyxl")

    expected_cols = ['Interprete', 'Codigo', 'Nome', 'Trecho', 'Idioma']
    if not all(col in df.columns for col in expected_cols):
        raise ValueError("Missing one or more required columns in Excel file.")

    data_by_letter = defaultdict(list)

    for _, row in df.iterrows():
        interprete = str(row['Interprete']).strip()
        codigo = str(row['Codigo']).strip()
        nome = str(row['Nome']).strip()
        trecho = str(row['Trecho']).strip()
        idioma = str(row['Idioma']).strip()

        if not interprete:
            continue

        key = interprete[0].upper()
        if key.isdigit():
            key = "#"

        data_by_letter[key].append({
            'artist': interprete,
            'code': codigo,
            'title': nome,
            'firstLyrics': trecho,
            'language': idioma
        })

    return dict(data_by_letter)

if __name__ == "__main__":
    path_to_xls = "songs.xlsx"
    result = extract_xls_data(path_to_xls)

    with open("output.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)