import React, { useState } from 'react'
import './Internship.css'

export default function Internship() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      id: 'cca',
      name: 'Cato Certified Associate (CCA)',
      description: 'Architecture SASE et configuration des règles de sécurité',
      file: '/CCA_Killian-FOL.pdf'
    },
    {
      id: 'cdsa',
      name: 'Cato Distinguished Support Associate (CDSA)',
      description: 'Méthodologie de résolution d\'incidents et gestion des flux VPN',
      file: '/CDSA_Killian-FOL.pdf'
    },
    {
      id: 'cdse',
      name: 'Cato Distinguished Support Expert (CDSE)',
      description: 'Expertise avancée en gestion d\'environnements multi-sites',
      file: '/CDSE_Killian-FOL.pdf'
    }
  ]

  const openCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
  }

  return (
    <div className="internship">
      <div className="content-container">
        <header className="page-header">
          <h1>Expérience Professionnelle</h1>
        </header>

        <div className="internship-card">
          <div className="internship-header">
            <div className="internship-title-group">
              <h2>Teamwork - SecOps</h2>
              <span className="internship-location">Agence de Saint-Priest</span>
            </div>
            <div className="internship-meta">
              <span className="internship-duration">5 semaines</span>
              <span className="internship-date">Janvier - Février 2026</span>
            </div>
          </div>

          <div className="internship-content">
            <section className="internship-section intro">
              <h3>Équipe SecOps : Réseau & Cybersécurité</h3>
              <p>
                Intégration de l'équipe SecOps en charge des sujets transverses entre réseau et cybersécurité.
                Participation active à la gestion de l'architecture SASE de l'entreprise via la solution Cato
                (VPN poste, Firewall as a Service), traitement de tickets, supervision et projets d'amélioration continue.
              </p>
            </section>

            <section className="internship-section">
              <h3>Missions principales réalisées</h3>

              <div className="missions-grid">
                <div className="mission-card">
                  <h4>Gestion des accès VPN clients</h4>
                  <p>
                    Configuration et ouverture d'accès VPN pour différents clients via l'architecture SASE Cato.
                    Résolution d'incidents de blocage de connexions VPN externes (groupe AVRIL, PCI) par mise en place
                    de règles de bypass ciblées et gestion de l'inspection TLS.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Cato SASE</span>
                    <span className="tech-tag">VPN</span>
                    <span className="tech-tag">Firewall</span>
                  </div>
                </div>

                <div className="mission-card">
                  <h4>Audit et restructuration des contrats SDM</h4>
                  <p>
                    Audit complet de plus de 100 contrats avec identification des IP VPN clients, détermination
                    des utilisateurs actifs, et création d'une base de suivi structurée. Réduction de 85% des
                    contrats non documentés et création de groupes dédiés dans Cato.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Audit</span>
                    <span className="tech-tag">Documentation</span>
                    <span className="tech-tag">Gestion d'accès</span>
                  </div>
                </div>

                <div className="mission-card">
                  <h4>Supervision FortiEdge Cloud</h4>
                  <p>
                    Résolution d'un problème critique de supervision Centreon : ouverture des flux réseau nécessaires
                    et identification d'un token d'authentification corrompu. Création d'un nouvel utilisateur admin
                    avec token valide, rétablissant la supervision complète du parc.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Centreon</span>
                    <span className="tech-tag">FortiEdge Cloud</span>
                    <span className="tech-tag">Monitoring</span>
                  </div>
                </div>

                <div className="mission-card">
                  <h4>Sécurisation d'un poste dashboard</h4>
                  <p>
                    Sécurisation d'un PC dédié à l'affichage 24/7 des dashboards AppOps. Blocage complet des accès
                    WAN/LAN/Internet avec création d'exceptions ciblées uniquement vers les ressources nécessaires.
                    Réservation IP via adresse MAC pour garantir la stabilité.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">Sécurité réseau</span>
                    <span className="tech-tag">Règles firewall</span>
                    <span className="tech-tag">DHCP</span>
                  </div>
                </div>

                <div className="mission-card">
                  <h4>Projet WiFi unifié multi-sites</h4>
                  <p>
                    Participation au projet de simplification de l'architecture WiFi (3 réseaux vers 1 seul).
                    Déploiement pilote sur Paris avec création et configuration d'un nouveau VLAN, propagation
                    sur les switches, harmonisation des sous-réseaux et mise en place de règles firewall de test.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">VLAN</span>
                    <span className="tech-tag">WiFi</span>
                    <span className="tech-tag">Active Directory</span>
                  </div>
                </div>

                <div className="mission-card">
                  <h4>Problématiques Cloud & Infrastructure as Code</h4>
                  <p>
                    Résolution d'incidents multi-environnements : déblocage d'accès AWS bloqués par Cato, analyse
                    de déconnexions de WAAS Azure liées au versioning du client Cato via Intune, et mise à jour
                    du code Terraform pour intégrer 6 subnets non référencés dans un VPC AWS.
                  </p>
                  <div className="tech-tags">
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Azure</span>
                    <span className="tech-tag">Terraform</span>
                    <span className="tech-tag">Intune</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="internship-section">
              <h3>Environnement technique</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Sécurité & Réseau</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Cato SASE</span>
                    <span className="tech-tag">Firewall WAN/LAN</span>
                    <span className="tech-tag">VPN</span>
                    <span className="tech-tag">VLAN</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Supervision</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Centreon</span>
                    <span className="tech-tag">FortiEdge Cloud</span>
                    <span className="tech-tag">ITOP</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Cloud & IaC</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Azure</span>
                    <span className="tech-tag">Terraform</span>
                    <span className="tech-tag">GitHub</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="internship-section">
              <h3>Certifications obtenues</h3>
              <p className="certifications-hint">Cliquez sur une certification pour voir le certificat en plein écran</p>
              <div className="certifications-grid">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="certification-card"
                    onClick={() => openCertificate(cert)}
                  >
                    <div className="cert-icon">🏆</div>
                    <div className="cert-content">
                      <h4>{cert.name}</h4>
                      <p>{cert.description}</p>
                    </div>
                    <div className="cert-action">
                      <span className="view-cert-btn">Voir le certificat</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="internship-section">
              <h3>Compétences développées</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Architecture SASE & Cybersécurité</h4>
                  <p>Maîtrise de l'architecture Secure Access Service Edge et des politiques de sécurité réseau avancées</p>
                </div>
                <div className="skill-item">
                  <h4>Administration réseau avancée</h4>
                  <p>Configuration de VLAN, harmonisation de sous-réseaux, gestion d'adressage IP et règles firewall</p>
                </div>
                <div className="skill-item">
                  <h4>Supervision & Monitoring</h4>
                  <p>Analyse et résolution d'incidents de supervision, gestion des tokens d'authentification</p>
                </div>
                <div className="skill-item">
                  <h4>Infrastructure as Code</h4>
                  <p>Découverte de Terraform, versioning GitHub et gestion d'infrastructures cloud</p>
                </div>
                <div className="skill-item">
                  <h4>Gestion de tickets & ITIL</h4>
                  <p>Utilisation d'ITOP, suivi méthodique des incidents et documentation structurée</p>
                </div>
                <div className="skill-item">
                  <h4>Environnements Cloud multi-plateformes</h4>
                  <p>Analyse de flux AWS et Azure, résolution d'incidents cross-platform</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-header">
            <h2>Teamwork</h2>
            <span className="internship-duration">7 semaines</span>
          </div>

          <div className="internship-content">
            <section className="internship-section intro">
              <h3>Mission principale</h3>
              <p>
                Se familiariser avec l'environnement Cloud et plus particulièrement avec
                Amazon Web Services (AWS), en développant un projet complet de bibliothèque
                de citations déployée sur le cloud.
              </p>
            </section>

            <section className="internship-section">
              <h3>Déroulement du stage</h3>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">S1</div>
                  <div className="timeline-content">
                    <h4>Semaine 1 - Intégration</h4>
                    <ul>
                      <li>Découverte de l'entreprise et des équipes</li>
                      <li>Visite des locaux et prise en main du matériel</li>
                      <li>Récupération de l'équipement (ordinateur portable, casque, souris, sacoche)</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">S2</div>
                  <div className="timeline-content">
                    <h4>Semaines 2 - Formation</h4>
                    <ul>
                      <li>Formations d'onboarding sur la culture d'entreprise</li>
                      <li>Formations techniques approfondies sur les services AWS (en anglais)</li>
                      <li>Découverte de l'écosystème cloud AWS et de ses différents services</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item highlighted">
                  <div className="timeline-marker">S3</div>
                  <div className="timeline-content">
                    <h4>Semaine 3 - Lancement du projet "Citathèque"</h4>
                    <p><strong>Projet :</strong> Création d'une bibliothèque de citations</p>
                    <ul>
                      <li>Conception de l'architecture applicative</li>
                      <li><strong>Backend :</strong> Développement en Python pour les tests locaux</li>
                      <li><strong>Frontend :</strong> Développement en React pour assurer la portabilité multi-plateformes</li>
                      <li>Mise en place de l'environnement de développement local</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item highlighted">
                  <div className="timeline-marker">S4</div>
                  <div className="timeline-content">
                    <h4>Semaine 4 - Architecture AWS et Base de données</h4>
                    <ul>
                      <li>Conception et déploiement de l'architecture cloud AWS</li>
                      <li>Mise en place de <strong>DynamoDB</strong> pour le stockage des données</li>
                      <li>Modélisation de la base de données (texte, auteur, date d'ajout...)</li>
                      <li>Tests d'intégration entre le backend et DynamoDB</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item highlighted">
                  <div className="timeline-marker">S5</div>
                  <div className="timeline-content">
                    <h4>Semaine 5 - Pagination et Sécurité</h4>
                    <ul>
                      <li>Implémentation de la <strong>pagination</strong> avec système de tokens</li>
                      <li>Gestion des droits utilisateurs (User vs Admin)</li>
                      <li>Fonctionnalités Admin : ajout, suppression et modification de citations</li>
                      <li>Intégration d'<strong>AWS Cognito</strong> pour l'authentification</li>
                      <li>Mise en place de l'échange de tokens pour garantir l'authenticité des utilisateurs</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item highlighted">
                  <div className="timeline-marker">S6</div>
                  <div className="timeline-content">
                    <h4>Semaine 6 - Filtres et Recherche</h4>
                    <ul>
                      <li>Développement du système de tri multi-critères :</li>
                      <li>Tri par date d'ajout (croissant / décroissant)</li>
                      <li>Tri alphabétique par nom d'auteur (A-Z / Z-A)</li>
                      <li>Implémentation d'une <strong>barre de recherche avancée</strong></li>
                      <li>Recherche dans les noms, prénoms des auteurs et textes des citations</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item highlighted">
                  <div className="timeline-marker">S7</div>
                  <div className="timeline-content">
                    <h4>Semaine 7 - Finalisation et Présentation</h4>
                    <ul>
                      <li>Ajout de <strong>buckets S3</strong> pour le stockage des images des auteurs</li>
                      <li>Amélioration de l'interface utilisateur et design</li>
                      <li>Tests finaux et optimisations</li>
                      <li><strong>Présentation orale</strong> du projet devant l'équipe lors de la réunion du vendredi matin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="internship-section">
              <h3>Technologies et services AWS utilisés</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML/CSS</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Backend</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">API REST</span>
                  </div>
                </div>

                <div className="tech-category">
                  <h4>Services AWS</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">DynamoDB</span>
                    <span className="tech-tag">Cognito</span>
                    <span className="tech-tag">S3</span>
                    <span className="tech-tag">Lambda</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="internship-section">
              <h3>Compétences développées</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Cloud Computing</h4>
                  <p>Conception et déploiement d'architectures cloud sur AWS</p>
                </div>
                <div className="skill-item">
                  <h4>Développement Full-Stack</h4>
                  <p>Création d'applications web complètes (frontend + backend)</p>
                </div>
                <div className="skill-item">
                  <h4>Bases de données NoSQL</h4>
                  <p>Modélisation et utilisation de DynamoDB</p>
                </div>
                <div className="skill-item">
                  <h4>Sécurité et Authentification</h4>
                  <p>Mise en place de systèmes d'authentification sécurisés avec Cognito</p>
                </div>
                <div className="skill-item">
                  <h4>Gestion de projet</h4>
                  <p>Planification, développement itératif et présentation de projet</p>
                </div>
                <div className="skill-item">
                  <h4>Communication professionnelle</h4>
                  <p>Présentation technique en anglais et documentation</p>
                </div>
              </div>
            </section>

            <section className="internship-section demo-section">
              <h3>Démonstration du projet</h3>
              <p className="demo-description">
                Découvrez le résultat final de la Citathèque : une application complète de gestion de citations déployée sur AWS.
              </p>
              <div className="video-container">
                <video controls className="demo-video">
                  <source src="/demo-citatheque.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </section>

          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={closeCertificate}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h3>{selectedCert.name}</h3>
              <button className="cert-modal-close" onClick={closeCertificate}>
                ✕
              </button>
            </div>
            <div className="cert-modal-body">
              <iframe
                src={selectedCert.file}
                title={selectedCert.name}
                className="cert-pdf-viewer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
