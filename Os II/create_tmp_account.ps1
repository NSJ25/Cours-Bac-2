# ============================================================
# Script : create_tmp_account.ps1
# Objectif : créer un compte utilisateur temporaire avec mot de passe sécurisé
# et permissions limitées pour un visiteur
# ============================================================

# Afficher un message
Write-Host "Création du compte temporaire"

# Demander un mot de passe sécurisé
$Password = Read-Host -AsSecureString -Prompt "Entrez un mot de passe pour le compte temporaire"

# Créer les variables pour le nom du groupe et de l'utilisateur
$NomGroup = "Temp-Visitors"
$NomUtilisateur = "temp_external"

# Créer le groupe local
New-LocalGroup -Name $NomGroup -Description "Groupe pour les visiteurs temporaires, permissions limitées"
Write-Host "Groupe '$NomGroup' créé."

# Créer le compte utilisateur local avec le mot de passe sécurisé
New-LocalUser -Name $NomUtilisateur -Password $Password -FullName "Externe Temporaire" -Description "Compte pour visiteur temporaire - Semaine 42"
Write-Host "Utilisateur '$NomUtilisateur' créé."

# Configurer les propriétés du compte utilisateur
Set-LocalUser -Name $NomUtilisateur -PasswordNeverExpires $True -UserMayChangePassword $False

# Ajouter l'utilisateur au groupe local
Add-LocalGroupMember -Group $NomGroup -Member $NomUtilisateur
Write-Host "Utilisateur '$NomUtilisateur' ajouté au groupe '$NomGroup'."

# Afficher les détails du compte
Write-Host "Détails du compte $NomUtilisateur :"
Get-LocalUser -Name $NomUtilisateur | Select-Object Name, Enabled, PasswordNeverExpires | Format-Table

# Afficher les membres du groupe
Write-Host "Membres du groupe '$NomGroup' :"
Get-LocalGroupMember -Group $NomGroup | Select-Object Name, ObjectClass | Format-Table


# Fin du script
Write-Host "Script de création de compte temporaire terminé Bravo Jeremie Ns, Tu es tellement Intelligent !"