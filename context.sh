#!/bin/bash

# --- Configuration Next.js ---

DEFAULT_PROJECT_PATH="."
PROJECT_PATH=${1:-"$DEFAULT_PROJECT_PATH"}
OUTPUT_FILENAME="project_context.txt"

# Dossiers à ignorer (Spécifique JS/Next.js)
EXCLUDE_DIRS_PATTERN=( \
    ".*"            # .git, .vscode, .idea
    "node_modules"  # Indispensable à ignorer
    ".next"         # Build output Next.js (très lourd)
    "out"           # Export statique
    "build"         # Build générique
    "coverage"      # Tests
    "public"        # Souvent des assets (images, fonts)
    "dist"
    ".vercel"       # Cache de déploiement Vercel
)

# Fichiers à ignorer
EXCLUDE_FILES_PATTERN=( \
    "*.log"
    "package-lock.json"
    "yarn.lock"
    "pnpm-lock.yaml"
    "bun.lockb"
    ".env*"         # Sécurité (clés API, secrets)
    "*.ico"
    "*.png"
    "*.jpg"
    "*.jpeg"
    "*.svg"
    "*.webp"
    "*.pdf"
    "*.map"         # Source maps
    "$OUTPUT_FILENAME"
)

# --- Logique du Script ---

PROJECT_PATH=$(realpath "$PROJECT_PATH" 2>/dev/null)
if [ $? -ne 0 ] || [ ! -d "$PROJECT_PATH" ]; then
    echo "Erreur: Répertoire invalide." >&2
    exit 1
fi

OUTPUT_FILE="$PROJECT_PATH/$OUTPUT_FILENAME"
rm -f "$OUTPUT_FILE"

# Construction de la commande find
find_args=("$PROJECT_PATH")

if [ ${#EXCLUDE_DIRS_PATTERN[@]} -gt 0 ]; then
    find_args+=(\()
    first_prune=true
    for dir_pattern in "${EXCLUDE_DIRS_PATTERN[@]}"; do
        if ! $first_prune; then find_args+=(-o); fi
        find_args+=(-name "$dir_pattern" -type d)
        first_prune=false
    done
    find_args+=(\) -prune -o)
fi

find_args+=(\( -type f -not -path "$OUTPUT_FILE")
if [ ${#EXCLUDE_FILES_PATTERN[@]} -gt 0 ]; then
    for file_pattern in "${EXCLUDE_FILES_PATTERN[@]}"; do
        find_args+=(-not -name "$file_pattern")
    done
fi
find_args+=(-print \))

# --- Génération du contenu ---

{
    echo "Next.js Project Context"
    echo "Generated On: $(date)"
    echo "Root: $PROJECT_PATH"
    echo "==============================================="
} > "$OUTPUT_FILE"

while IFS= read -r FILE_PATH; do
    RELATIVE_PATH="${FILE_PATH#"$PROJECT_PATH"/}"
    
    {
        echo "// FILE: $RELATIVE_PATH"
        echo "-----------------------------------------------"
    } >> "$OUTPUT_FILE"

    # Vérification binaire
    if file -b "$FILE_PATH" | grep -q -E 'binary|archive|image|font'; then
        echo "[Fichier binaire ou asset omis]" >> "$OUTPUT_FILE"
    else
        cat "$FILE_PATH" >> "$OUTPUT_FILE" 2>/dev/null
    fi

    echo -e "\n// END OF FILE: $RELATIVE_PATH\n" >> "$OUTPUT_FILE"

done < <(find "${find_args[@]}" | sort)

echo "Succès ! Ton contexte Next.js est prêt dans : $OUTPUT_FILENAME"