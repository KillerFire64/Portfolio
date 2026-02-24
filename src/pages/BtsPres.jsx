import React from 'react'
import './BtsPres.css'

export default function BtsPres() {
  return (
    <div className="bts-pres">
      <div className="content-container">
        <header className="page-header">
          <h1>Présentation du BTS SIO</h1>
        </header>

        <section className="bts-section">
          <h2>Le BTS Services Informatiques aux Organisations</h2>
          <p>
            Le BTS SIO (Services Informatiques aux Organisations) est un diplôme de niveau Bac+2
            qui forme des techniciens capables de gérer et d'administrer le réseau d'une entreprise,
            ainsi que d'assurer la sécurité et l'intégrité des données.
          </p>
        </section>

        <section className="bts-section program-section">
          <h2>Programme de Formation</h2>
          <p className="program-intro">
            Le BTS SIO propose un programme complet alliant enseignements généraux et techniques professionnels.
          </p>

          <div className="program-table">
            <div className="program-row">
              <div className="program-cell matiere">Culture générale et expression</div>
              <div className="program-cell objectif">
                Vise à améliorer les capacités de communication écrite et orale des étudiants.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Anglais</div>
              <div className="program-cell objectif">
                La maîtrise de l'anglais est essentielle dans le domaine de l'informatique, où une grande partie des ressources est en anglais.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Mathématiques appliquées à l'informatique</div>
              <div className="program-cell objectif">
                Permet aux étudiants d'acquérir les compétences mathématiques nécessaires pour résoudre des problèmes informatiques complexes.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Culture Économique, Juridique et Managériale (CEJM)</div>
              <div className="program-cell objectif">
                Permet aux étudiants de comprendre le contexte économique, juridique et managérial dans lequel évoluent les entreprises.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Support et mise à disposition de services informatiques</div>
              <div className="program-cell objectif">
                Dans cette matière les étudiants apprennent à gérer et sécuriser les services informatiques d'une entreprise, de répondre aux besoins des utilisateurs et d'accompagner sa transformation numérique.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Cybersécurité des services informatiques</div>
              <div className="program-cell objectif">
                Dans cette matière les étudiants sont formés à l'intégration de la cybersécurité dans l'entreprise afin de protéger ses données, ses équipements et l'identité numérique de façon globale et sécurisée.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">SISR</div>
              <div className="program-cell objectif">
                Centrale pour les étudiants de l'option SISR, qui apprennent à installer, configurer et gérer des réseaux et des systèmes informatiques.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">SLAM</div>
              <div className="program-cell objectif">
                Centrale pour les étudiants de l'option SLAM, qui apprennent à concevoir et développer des logiciels et des applications.
              </div>
            </div>

            <div className="program-row">
              <div className="program-cell matiere">Projet Professionnel Encadré (PPE)</div>
              <div className="program-cell objectif">
                Permet aux étudiants de réaliser en équipe un projet concret et encadré, proche des situations professionnelles du métier.
              </div>
            </div>
          </div>
        </section>

        <section className="bts-section">
          <h2>Option SISR</h2>
          <h3>Solutions d'Infrastructure, Systèmes et Réseaux</h3>
          <p>
            L'option SISR forme des professionnels des infrastructures réseaux. Les compétences
            développées permettent de répondre aux besoins d'infrastructure réseau, de sécurité
            et d'exploitation des systèmes informatiques.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h4>Administration Systèmes</h4>
              <ul>
                <li>Installation et configuration de serveurs</li>
                <li>Virtualisation (Proxmox, VMware)</li>
                <li>Active Directory et gestion des utilisateurs</li>
                <li>Automatisation et scripting</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Infrastructure Réseau</h4>
              <ul>
                <li>Configuration de switchs et routeurs</li>
                <li>Architecture réseau (LAN, WAN, VLAN)</li>
                <li>Protocoles réseau (TCP/IP, DNS, DHCP)</li>
                <li>Câblage et normes</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Sécurité</h4>
              <ul>
                <li>Pare-feu et filtrage</li>
                <li>VPN et accès distant</li>
                <li>Supervision et monitoring (Zabbix)</li>
                <li>Sauvegardes et plans de reprise</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="bts-section">
          <h2>Option SLAM</h2>
          <h3>Solutions Logicielles et Applications Métier</h3>
          <p>
            L'option SLAM forme des développeurs d'applications. Les compétences développées
            permettent de concevoir, développer et maintenir des applications informatiques
            répondant aux besoins des utilisateurs.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h4>Développement d'applications</h4>
              <ul>
                <li>Programmation orientée objet</li>
                <li>Développement web (HTML, CSS, JavaScript)</li>
                <li>Frameworks (React, Angular, Vue.js)</li>
                <li>Applications mobiles</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Bases de données</h4>
              <ul>
                <li>Conception et modélisation (MCD, MLD)</li>
                <li>SQL et requêtes</li>
                <li>Administration de bases de données</li>
                <li>Optimisation des performances</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Gestion de projet</h4>
              <ul>
                <li>Méthodologies agiles (Scrum, Kanban)</li>
                <li>Versioning (Git, GitHub)</li>
                <li>Tests et qualité logicielle</li>
                <li>Documentation technique</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bts-section">
          <h2>Compétences de l'Épreuve E5</h2>
          <div className="competences">
            <div className="competence-block">
              <h3>C1 - Gérer le patrimoine informatique</h3>
              <p>Recenser et identifier les ressources numériques, gérer les configurations et assurer le suivi du parc informatique de l'organisation.</p>
            </div>
            <div className="competence-block">
              <h3>C2 - Répondre aux incidents et aux demandes d'assistance et d'évolution</h3>
              <p>Collecter, suivre et résoudre les incidents et les demandes d'assistance en garantissant la continuité de service.</p>
            </div>
            <div className="competence-block">
              <h3>C3 - Développer la présence en ligne de l'organisation</h3>
              <p>Participer à la valorisation de l'image de l'organisation sur Internet et contribuer à l'évolution de sa présence numérique.</p>
            </div>
            <div className="competence-block">
              <h3>C4 - Travailler en mode projet</h3>
              <p>Analyser les objectifs, planifier les activités, évaluer les indicateurs de suivi et favoriser la collaboration au sein d'une équipe projet.</p>
            </div>
            <div className="competence-block">
              <h3>C5 - Mettre à disposition des utilisateurs un service informatique</h3>
              <p>Déployer, exploiter et maintenir un service informatique en garantissant les niveaux de qualité et de sécurité attendus.</p>
            </div>
            <div className="competence-block">
              <h3>C6 - Organiser son développement professionnel</h3>
              <p>Évaluer ses compétences, maintenir sa culture informatique et développer son projet professionnel dans le domaine de l'informatique.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
