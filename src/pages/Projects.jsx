import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects">
      <div className="content-container">
        <header className="page-header">
          <h1>Projets Personnalisés Encadrés (PPE)</h1>
        </header>

        <div className="project-card">
          <div className="project-header">
            <h2>Site Web SolutionV - Initiation HTML/CSS</h2>
            <span className="project-period">Octobre 2024 - Décembre 2024</span>
          </div>

          <div className="project-content">
            <section className="project-section">
              <h3>Contexte</h3>
              <p>
                Premier projet de développement web réalisé dans le cadre de la formation BTS SIO.
                Ce projet d'initiation avait pour but de créer un site vitrine pour SolutionV,
                une agence de voyages fictive.
              </p>
            </section>

            <section className="project-section">
              <h3>Objectifs</h3>
              <p>
                Concevoir et développer un site web complet présentant l'agence et son catalogue de voyages,
                en respectant les standards du web et les bonnes pratiques de développement HTML5/CSS3.
                Ce projet permettait de découvrir les fondamentaux du développement web front-end.
              </p>
            </section>

            <section className="project-section">
              <h3>Réalisations</h3>
              <ul className="achievement-list">
                <li>
                  <strong>Structure HTML5 :</strong> Création de la structure sémantique du site
                  avec les balises header, nav, section, article, aside et footer
                </li>
                <li>
                  <strong>Pages développées :</strong> Page d'accueil, présentation de l'agence,
                  catalogue de voyages, pages détaillées pour chaque destination et page de contact
                </li>
                <li>
                  <strong>Navigation :</strong> Mise en place d'un système de navigation par liens
                  et menus sous forme de listes
                </li>
                <li>
                  <strong>Contenu multimédia :</strong> Intégration d'images optimisées pour illustrer
                  les destinations et l'agence
                </li>
                <li>
                  <strong>Tableaux :</strong> Utilisation de tableaux HTML pour structurer les
                  informations de contact
                </li>
                <li>
                  <strong>Stylisation CSS :</strong> Application d'une charte graphique cohérente
                  avec gestion de la typographie, des couleurs et de la mise en page
                </li>
                <li>
                  <strong>Validation W3C :</strong> Vérification et correction du code HTML/CSS
                  pour respecter les standards du web
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h3>Compétences mises en œuvre</h3>
              <div className="tech-tags">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Structuration sémantique</span>
                <span className="tech-tag">Mise en forme de texte</span>
                <span className="tech-tag">Gestion d'images</span>
                <span className="tech-tag">Liens hypertextes</span>
                <span className="tech-tag">Listes et tableaux</span>
                <span className="tech-tag">Mise en page CSS</span>
                <span className="tech-tag">Standards W3C</span>
              </div>
            </section>

            <section className="project-section">
              <h3>Compétences BTS SIO</h3>
              <div className="competences-bts">
                <span className="competence-badge">C3 - Développer la présence en ligne</span>
                <span className="competence-badge">C4 - Travailler en mode projet</span>
              </div>
            </section>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h2>Nuit de l'Info 2025 - Hackathon National</h2>
            <span className="project-period">Décembre 2025</span>
          </div>

          <div className="project-content">
            <section className="project-section">
              <h3>Contexte</h3>
              <p>
                Participation à la Nuit de l'Info 2025, un hackathon national français qui rassemble
                des milliers d'étudiants en informatique à travers la France. Cette compétition intensive
                se déroule en une nuit, du coucher au lever du soleil, et met au défi les équipes de
                développer une application web complète en moins de 16 heures.
              </p>
              <p>
                Notre équipe <strong>Ctrl+Alt+FF</strong> était composée de 7 étudiants, mélangeant
                étudiants en formation initiale, en apprentissage et en Licence 3, favorisant ainsi
                l'échange de compétences et d'expériences.
              </p>
            </section>

            <section className="project-section">
              <h3>Thème et objectifs</h3>
              <p>
                Le sujet national de cette édition était : <em>"Comment réduire la dépendance des
                établissements scolaires aux BigTechs ?"</em>
              </p>
              <p>
                L'objectif était de sensibiliser les utilisateurs à leur dépendance aux grandes
                entreprises technologiques et de promouvoir les alternatives open source disponibles
                dans le monde éducatif.
              </p>
            </section>

            <section className="project-section">
              <h3>Application développée</h3>
              <ul className="achievement-list">
                <li>
                  <strong>Questionnaire interactif :</strong> Outil permettant aux utilisateurs de
                  répondre à des questions sur leurs habitudes d'utilisation d'applications dans
                  différents contextes. À l'issue du questionnaire, calcul d'un pourcentage de
                  dépendance aux BigTechs et recommandation d'alternatives open source avec leurs
                  avantages
                </li>
                <li>
                  <strong>Mini-jeu éducatif :</strong> Jeu de correspondance où les joueurs relient
                  les noms d'outils BigTech à leurs définitions, révélant progressivement les
                  alternatives open source disponibles
                </li>
                <li>
                  <strong>Moteur de recherche :</strong> Outil de recherche intégré facilitant
                  l'accès rapide aux alternatives open source référencées sur le site
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h3>Mon rôle dans l'équipe</h3>
              <p>
                J'ai participé à deux aspects du projet :
              </p>
              <ul className="achievement-list">
                <li>
                  <strong>Équipe réseau :</strong> En début de nuit, j'ai contribué à la mise en
                  place d'une infrastructure réseau privée servant d'environnement de développement
                  et de production pour l'équipe
                </li>
                <li>
                  <strong>Équipe développement :</strong> Suite à la mise en place de l'infrastructure,
                  j'ai rejoint l'équipe de développement pour contribuer à la réalisation de
                  l'application web
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h3>Technologies et outils utilisés</h3>
              <div className="tech-tags">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Infrastructure réseau</span>
                <span className="tech-tag">Travail en équipe</span>
              </div>
            </section>

            <section className="project-section">
              <h3>Compétences développées</h3>
              <ul className="achievement-list">
                <li>Travail en équipe pluridisciplinaire sous forte contrainte de temps</li>
                <li>Mise en place rapide d'une infrastructure de développement</li>
                <li>Développement web agile et itératif</li>
                <li>Gestion de projet dans un contexte de hackathon</li>
                <li>Collaboration avec des étudiants de différents niveaux et parcours</li>
              </ul>
            </section>

            <section className="project-section">
              <h3>Compétences BTS SIO</h3>
              <div className="competences-bts">
                <span className="competence-badge">C3 - Développer la présence en ligne</span>
                <span className="competence-badge">C4 - Travailler en mode projet</span>
                <span className="competence-badge">C5 - Mettre à disposition un service informatique</span>
                <span className="competence-badge">C6 - Organiser son développement professionnel</span>
              </div>
            </section>

            <div className="project-status">
              <p><strong>Résultats :</strong> Les résultats du concours seront publiés prochainement sur le site officiel de la Nuit de l'Info.</p>
            </div>
          </div>
        </div>

        <div className="project-card featured">
          <div className="project-header">
            <h2>Projet 1 : Ferme de Serveurs Proxmox</h2>
            <span className="project-period">Février 2025 - Mai 2025</span>
          </div>

          <div className="project-content">
            <section className="project-section">
              <h3>Contexte</h3>
              <p>
                Projet réalisé dans le cadre de la formation BTS SIO option SISR, visant à
                fournir une infrastructure de virtualisation pour l'établissement scolaire.
              </p>
            </section>

            <section className="project-section">
              <h3>Objectifs</h3>
              <p>
                Monter, configurer et déployer une ferme de serveurs Proxmox destinée à
                accueillir des machines virtuelles pour les utilisateurs de l'établissement.
                Cette infrastructure devait ensuite être intégrée au réseau existant de l'école.
              </p>
            </section>

            <section className="project-section">
              <h3>Réalisations</h3>
              <ul className="achievement-list">
                <li>
                  <strong>Montage physique :</strong> Installation et câblage des serveurs dans
                  une baie 19 pouces, respect des normes de câblage structuré
                </li>
                <li>
                  <strong>Installation Proxmox VE :</strong> Déploiement du système de
                  virtualisation sur plusieurs nœuds physiques
                </li>
                <li>
                  <strong>Configuration cluster :</strong> Mise en place d'un cluster Proxmox
                  pour la haute disponibilité et la gestion centralisée
                </li>
                <li>
                  <strong>Configuration réseau :</strong> Paramétrage des interfaces réseau,
                  VLANs et bridges pour l'isolation des VMs
                </li>
                <li>
                  <strong>Stockage :</strong> Configuration du stockage partagé (NFS/iSCSI) pour
                  permettre la migration à chaud des VMs
                </li>
                <li>
                  <strong>Tests de déploiement :</strong> Création et configuration de VMs de
                  test (Linux, Windows Server) pour valider l'infrastructure
                </li>
                <li>
                  <strong>Intégration :</strong> Connexion de la ferme à l'infrastructure réseau
                  de l'établissement et mise en production
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h3>Technologies utilisées</h3>
              <div className="tech-tags">
                <span className="tech-tag">Proxmox VE</span>
                <span className="tech-tag">Linux Debian</span>
                <span className="tech-tag">Clustering</span>
                <span className="tech-tag">VLANs</span>
                <span className="tech-tag">Trello/Kanban</span>
              </div>
            </section>

            <section className="project-section">
              <h3>Compétences BTS SIO</h3>
              <div className="competences-bts">
                <span className="competence-badge">C1 - Gérer le patrimoine informatique</span>
                <span className="competence-badge">C4 - Travailler en mode projet</span>
                <span className="competence-badge">C5 - Mettre à disposition un service informatique</span>
              </div>
            </section>

          </div>
        </div>

        <div className="project-card featured">
          <div className="project-header">
            <h2>Projet 2 : Infrastructure Réseau Complète</h2>
            <span className="project-period">Septembre 2025 - Décembre 2025</span>
          </div>

          <div className="project-content">
            <section className="project-section">
              <h3>Contexte</h3>
              <p>
                Projet de fin d'études réalisé en binôme, simulant la mise en place d'une
                infrastructure réseau complète pour une entreprise fictive.
              </p>
            </section>

            <section className="project-section">
              <h3>Objectifs</h3>
              <p>
                Concevoir, déployer et administrer une infrastructure réseau et système complète
                en partant de zéro, incluant les équipements physiques (switchs, routeurs) et les
                services logiciels (Active Directory, supervision, services web).
              </p>
            </section>

            <section className="project-section">
              <h3>Architecture mise en place</h3>

              <div className="architecture-blocks">
                <div className="arch-block">
                  <h4>Infrastructure Physique</h4>
                  <ul>
                    <li>Configuration de switchs managés (VLANs, STP, agrégation de liens)</li>
                    <li>Configuration de routeurs (routage inter-VLAN, ACLs, NAT)</li>
                    <li>Câblage structuré et documentation du réseau</li>
                    <li>Segmentation réseau par départements</li>
                  </ul>
                </div>

                <div className="arch-block">
                  <h4>Services Systèmes</h4>
                  <ul>
                    <li><strong>Active Directory :</strong> Gestion centralisée des utilisateurs et GPO</li>
                    <li><strong>DNS/DHCP :</strong> Résolution de noms et attribution d'adresses IP</li>
                    <li><strong>Serveur de fichiers :</strong> Partages réseau et gestion des droits</li>
                    <li><strong>Serveurs Web Linux :</strong> Hébergement d'applications</li>
                  </ul>
                </div>

                <div className="arch-block">
                  <h4>Supervision et Sécurité</h4>
                  <ul>
                    <li><strong>Zabbix :</strong> Monitoring des équipements et services</li>
                    <li><strong>Pare-feu :</strong> Filtrage et sécurisation des flux</li>
                    <li><strong>Sauvegardes :</strong> Plan de sauvegarde et restauration</li>
                    <li><strong>VPN :</strong> Accès distant sécurisé</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="project-section">
              <h3>Technologies utilisées</h3>
              <div className="tech-tags">
                <span className="tech-tag">Cisco IOS</span>
                <span className="tech-tag">Windows Server</span>
                <span className="tech-tag">Active Directory</span>
                <span className="tech-tag">Linux (Debian/Ubuntu)</span>
                <span className="tech-tag">Zabbix</span>
                <span className="tech-tag">Apache/Nginx</span>
                <span className="tech-tag">VLANs</span>
                <span className="tech-tag">Routing & Switching</span>
              </div>
            </section>

            <section className="project-section">
              <h3>Documentation des processus clés</h3>

              <div className="architecture-blocks">
                <div className="arch-block">
                  <h4>Active Directory</h4>
                  <ul>
                    <li>Installation et configuration du contrôleur de domaine</li>
                    <li>Création de la structure organisationnelle (OU) par départements</li>
                    <li>Gestion des comptes utilisateurs et groupes de sécurité</li>
                    <li>Mise en place de stratégies de groupe (GPO) pour la sécurité et la configuration des postes</li>
                    <li>Configuration des politiques de mots de passe</li>
                    <li>Intégration DNS et attribution des rôles FSMO</li>
                    <li>Tests de connexion et application des GPO</li>
                  </ul>
                </div>

                <div className="arch-block">
                  <h4>Serveurs Web Linux</h4>
                  <ul>
                    <li>Installation et configuration d'Apache/Nginx sur Debian</li>
                    <li>Configuration des hôtes virtuels pour plusieurs sites</li>
                    <li>Mise en place de certificats SSL/TLS avec Let's Encrypt</li>
                    <li>Configuration du pare-feu UFW pour sécuriser les ports</li>
                    <li>Optimisation des performances et mise en cache</li>
                    <li>Déploiement d'applications web et gestion des permissions</li>
                    <li>Configuration des logs et rotation automatique</li>
                  </ul>
                </div>

                <div className="arch-block">
                  <h4>Supervision Zabbix</h4>
                  <ul>
                    <li>Installation du serveur Zabbix et de la base de données</li>
                    <li>Configuration de l'interface web de monitoring</li>
                    <li>Déploiement des agents Zabbix sur les équipements à surveiller</li>
                    <li>Création de templates personnalisés par type d'équipement</li>
                    <li>Configuration des triggers et seuils d'alerte</li>
                    <li>Mise en place de notifications par email</li>
                    <li>Création de dashboards pour visualiser l'état de l'infrastructure</li>
                    <li>Surveillance de la disponibilité, charge CPU, mémoire, disque et réseau</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="project-section">
              <h3>Compétences BTS SIO</h3>
              <div className="competences-bts">
                <span className="competence-badge">C1 - Gérer le patrimoine informatique</span>
                <span className="competence-badge">C2 - Répondre aux incidents et demandes d'assistance</span>
                <span className="competence-badge">C4 - Travailler en mode projet</span>
                <span className="competence-badge">C5 - Mettre à disposition un service informatique</span>
              </div>
            </section>

            <div className="project-status">
              <p><strong>État d'avancement :</strong> Projet terminé avec succès. L'infrastructure est déployée, documentée et pleinement opérationnelle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
