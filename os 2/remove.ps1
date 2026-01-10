# ============================================================
# Script : remove_tmp_account.ps1
# Objectif : supprimer un compte utilisateur temporaire
# et le groupe local associé
# ============================================================

# Afficher un message
Write-Host "Suppression du compte temporaire et du groupe associé" -ForegroundColor Cyan

# Variables pour le nom du groupe et de l'utilisateur
$NomGroup = "Temp-Visitors"
$NomUtilisateur = "temp_external"

# Supprimer l'utilisateur du groupe si présent
if (Get-LocalGroupMember -Group $NomGroup -ErrorAction SilentlyContinue | Where-Object {$_.Name -eq $NomUtilisateur}) {
    Remove-LocalGroupMember -Group $NomGroup -Member $NomUtilisateur
    Write-Host "Utilisateur '$NomUtilisateur' supprimé du groupe '$NomGroup'." -ForegroundColor Yellow
} else {
    Write-Host "Utilisateur '$NomUtilisateur' n'est pas membre du groupe '$NomGroup' ou le groupe n'existe pas." -ForegroundColor Gray
}

# Supprimer le compte utilisateur local si existant
if (Get-LocalUser -Name $NomUtilisateur -ErrorAction SilentlyContinue) {
    Remove-LocalUser -Name $NomUtilisateur
    Write-Host "Utilisateur '$NomUtilisateur' supprimé." -ForegroundColor Red
} else {
    Write-Host "Utilisateur '$NomUtilisateur' n'existe pas." -ForegroundColor Gray
}

# Supprimer le groupe local si existant
if (Get-LocalGroup -Name $NomGroup -ErrorAction SilentlyContinue) {
    Remove-LocalGroup -Name $NomGroup
    Write-Host "Groupe '$NomGroup' supprimé." -ForegroundColor Red
} else {
    Write-Host "Groupe '$NomGroup' n'existe pas." -ForegroundColor Gray
}

# Fin du script
Write-Host "Suppression terminée !" -ForegroundColor Green