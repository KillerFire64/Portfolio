import React from 'react'
import './TechWatch.css'

export default function TechWatch() {
  return (
    <div className="tech-watch">
      <div className="content-container">
        <header className="page-header">
          <h1>Veille Technologique</h1>
        </header>

        <section className="watch-intro">
          <h2>Qu'est-ce que la veille technologique ?</h2>
          <p>
            La veille technologique consiste à surveiller de manière systématique et continue
            les évolutions techniques, technologiques et réglementaires dans un domaine précis.
            Elle permet de rester informé des dernières innovations, d'anticiper les changements
            et de maintenir ses compétences à jour.
          </p>
        </section>

        <section className="watch-section">
          <h2>Mon sujet de Veille et son état de l'art</h2>
          <div className="state-of-art">
            <h3>La sécurité des appareils numériques face aux cyberattaques et l'évolution des solutions de protection</h3>

            <p>
              Avec la généralisation des appareils numériques, les cyberattaques sont devenues plus
              fréquentes et plus sophistiquées. Les systèmes actuels s'appuient principalement sur des
              mises à jour de sécurité régulières, des mécanismes d'authentification renforcée et des
              outils de détection basés sur l'analyse comportementale et l'intelligence artificielle.
            </p>

            <p>
              De nouveaux modèles comme le Zero Trust se développent afin de limiter les risques de
              compromission, tandis que la sécurisation des objets connectés reste un défi majeur.
              La cybersécurité des appareils repose désormais sur une approche globale, combinant
              technologies avancées et bonnes pratiques des utilisateurs.
            </p>
          </div>
        </section>

        <section className="watch-section">
          <h2>Actualités mensuelles</h2>

          <div className="monthly-watches">
            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Septembre 2025</h3>
                <span className="monthly-date">Septembre 2025</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    En septembre 2025, Google a publié une mise à jour de sécurité Android corrigeant plusieurs
                    <strong>vulnérabilités critiques zero-day</strong>, dont certaines étaient déjà exploitées
                    activement par des cybercriminels. Ces failles touchaient des composants centraux du système
                    et concernaient un grand nombre d'appareils Android.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les vulnérabilités identifiées se situaient notamment au niveau du <strong>noyau (kernel)</strong> et
                    d'<strong>Android Runtime</strong>, permettant potentiellement une élévation de privilèges ou
                    l'exécution de code malveillant. Les attaques pouvaient être déclenchées via des applications
                    malveillantes ou des contenus piégés, compromettant l'appareil sans interaction visible de l'utilisateur.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Google recommande l'<strong>installation immédiate des correctifs de sécurité</strong> afin de réduire
                    la fenêtre d'exploitation. Cette actualité souligne l'importance des mises à jour régulières, de la
                    limitation des applications non officielles et du maintien d'un système à jour pour garantir la sécurité
                    des appareils.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://www.cyberscoop.com/android-zero-day-vulnerabilities-september-2025/" target="_blank" rel="noopener noreferrer" className="source-link">
                      CyberScoop
                    </a>
                    <a href="https://www.enisa.europa.eu/topics/cyber-threat-landscape" target="_blank" rel="noopener noreferrer" className="source-link">
                      ENISA
                    </a>
                    <a href="https://www.securityweek.com/android-fixes-actively-exploited-zero-day-flaws/" target="_blank" rel="noopener noreferrer" className="source-link">
                      SecurityWeek
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Octobre 2025</h3>
                <span className="monthly-date">Octobre 2025</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    À l'occasion du <strong>Cybersecurity Awareness Month</strong>, plusieurs organismes de
                    cybersécurité ont alerté sur une hausse significative des <strong>attaques de phishing assistées
                    par intelligence artificielle</strong>. Ces campagnes ciblent aussi bien les particuliers que les
                    professionnels, en utilisant des messages très crédibles et personnalisés.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les attaquants exploitent l'IA pour générer automatiquement des e-mails imitant
                    parfaitement des services connus (banques, messageries, plateformes cloud). Les messages
                    contiennent peu d'erreurs, utilisent le bon vocabulaire et s'adaptent au contexte de la
                    victime, ce qui rend leur détection plus difficile par les filtres classiques.
                  </p>
                  <p className="methods-intro">Les méthodes incluent :</p>
                  <ul className="methods-list">
                    <li>
                      <strong>Phishing ciblé (spear phishing)</strong> : messages personnalisés selon la fonction
                      ou l'entreprise
                    </li>
                    <li>
                      <strong>Pages frauduleuses réalistes</strong> : fausses pages de connexion difficiles à
                      distinguer des vraies
                    </li>
                    <li>
                      <strong>Automatisation à grande échelle</strong> : diffusion massive sans perte de crédibilité
                    </li>
                  </ul>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Face à cette évolution, les recommandations insistent sur l'usage de
                    l'<strong>authentification multifacteur</strong>, la <strong>vérification systématique des liens
                    et expéditeurs</strong>, et la <strong>sensibilisation des utilisateurs</strong>, devenue un élément
                    clé de la protection des appareils.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://www.enisa.europa.eu/news/etl-2025-eu-consistently-targeted-by-diverse-yet-convergent-threat-groups?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="source-link">
                      ENISA
                    </a>
                    <a href="https://www.solutions-numeriques.com/les-emails-frauduleux-explosent-dopes-par-lautomatisation-et-lia/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="source-link">
                      Solutions-Numériques
                    </a>
                    <a href="https://www.esecurityplanet.com/news/ai-phishing-scams-outsmarting-everyone/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="source-link">
                      eSecurity Planet
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Novembre 2025</h3>
                <span className="monthly-date">Novembre 2025</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    En novembre 2025, de nombreuses entreprises renforcent la sécurité de leurs appareils
                    en adoptant des solutions <strong>EDR (Endpoint Detection and Response)</strong> et <strong>XDR</strong>.
                    Cette évolution répond à la hausse des attaques sophistiquées, notamment les ransomwares
                    et les compromissions internes difficiles à détecter avec des antivirus classiques.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les solutions EDR/XDR surveillent en continu l'activité des appareils (PC, serveurs,
                    terminaux mobiles) afin d'identifier des comportements anormaux : exécution de processus
                    suspects, connexions réseau inhabituelles ou tentatives d'élévation de privilèges.
                    En cas de détection, elles permettent une réponse rapide, comme l'isolement automatique
                    d'un appareil compromis.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Cette approche marque un changement vers une <strong>sécurité proactive</strong>, basée sur
                    l'<strong>analyse comportementale</strong> plutôt que sur la simple détection de signatures.
                    Elle s'intègre dans des stratégies de défense modernes visant à limiter l'impact des
                    attaques avant leur propagation.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://www.silicon.fr/cybersecurite-edr-xdr-analyse-2025" target="_blank" rel="noopener noreferrer" className="source-link">
                      Silicon.fr
                    </a>
                    <a href="https://www.lemondeinformatique.fr/actualites/lire-ransomware-et-edr-xdr-comment-mieux-se-proteger-125678.html" target="_blank" rel="noopener noreferrer" className="source-link">
                      Le Monde Informatique
                    </a>
                    <a href="https://www.zdnet.fr/guide/edr-vs-xdr-le-comparatif-2025-39956741.htm" target="_blank" rel="noopener noreferrer" className="source-link">
                      ZDNet
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Décembre 2025</h3>
                <span className="monthly-date">Décembre 2025</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    En décembre 2025, plusieurs alertes de cybersécurité mettent en évidence une
                    augmentation des attaques visant les <strong>objets connectés (IoT)</strong> et les
                    <strong>équipements réseau</strong> (caméras, routeurs, capteurs). Ces appareils,
                    souvent insuffisamment sécurisés, sont régulièrement exploités comme points d'entrée
                    ou intégrés à des botnets.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les attaques reposent principalement sur des <strong>mots de passe faibles ou par défaut</strong>,
                    des <strong>firmwares obsolètes</strong> et des services exposés sur Internet. Une fois compromis,
                    les appareils peuvent être utilisés pour espionner, relayer des attaques DDoS ou servir de
                    porte d'entrée vers d'autres systèmes du réseau.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Les recommandations actuelles insistent sur la <strong>sécurisation native des objets connectés</strong> :
                    suppression des mots de passe par défaut, mises à jour de sécurité régulières, chiffrement des
                    communications et segmentation réseau. La sécurité des appareils ne se limite plus aux ordinateurs
                    et smartphones, mais concerne l'ensemble de l'écosystème numérique.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://www.enisa.europa.eu/topics/iot-and-smart-infrastructures" target="_blank" rel="noopener noreferrer" className="source-link">
                      ENISA
                    </a>
                    <a href="https://www.ssi.gouv.fr/entreprise/bonnes-pratiques/objets-connectes/" target="_blank" rel="noopener noreferrer" className="source-link">
                      ANSSI
                    </a>
                    <a href="https://www.securityweek.com/iot-devices-increasingly-targeted-in-cyberattacks/" target="_blank" rel="noopener noreferrer" className="source-link">
                      SecurityWeek
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Janvier 2026</h3>
                <span className="monthly-date">Janvier 2026</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    En janvier 2026, plusieurs incidents de cybersécurité ont mis en lumière la vulnérabilité
                    persistante des appareils numériques, qu'il s'agisse d'ordinateurs professionnels, de serveurs
                    ou d'équipements connectés. Certaines attaques ont exploité des failles critiques non corrigées,
                    tandis que d'autres ont ciblé des mécanismes de mise à jour logicielle.
                  </p>
                  <p>
                    Ces événements confirment que la sécurité des appareils ne dépend pas uniquement de leur
                    configuration locale, mais aussi de l'ensemble de l'écosystème numérique dans lequel ils évoluent.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les attaques recensées en janvier ont notamment impliqué :
                  </p>
                  <ul className="methods-list">
                    <li>l'exploitation de <strong>vulnérabilités critiques activement exploitées</strong></li>
                    <li>des <strong>compromissions liées à la chaîne d'approvisionnement logicielle</strong> (supply chain)</li>
                    <li>des <strong>erreurs de configuration</strong> exposant des services sur Internet</li>
                  </ul>
                  <p>
                    Dans plusieurs cas, les appareils finaux ont été compromis via des logiciels légitimes,
                    démontrant que la surface d'attaque s'étend bien au-delà du terminal lui-même.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Les recommandations insistent sur :
                  </p>
                  <ul className="methods-list">
                    <li>une <strong>gestion rigoureuse des mises à jour et correctifs de sécurité</strong></li>
                    <li>une <strong>surveillance continue des activités anormales</strong></li>
                    <li>l'adoption d'une <strong>approche globale intégrant la chaîne d'approvisionnement</strong></li>
                    <li>le renforcement des modèles comme le <strong>Zero Trust</strong> pour limiter l'impact d'une compromission</li>
                  </ul>
                  <p>
                    Janvier 2026 illustre ainsi que la cybersécurité des appareils doit être pensée comme un
                    système évolutif et interconnecté, capable de s'adapter aux nouvelles formes d'attaques.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://www.cybersecurity-review.com/news-january-2026/" target="_blank" rel="noopener noreferrer" className="source-link">
                      Cybersecurity Review
                    </a>
                    <a href="https://www.swktech.com/swk-january-2026-cybersecurity-news-recap/" target="_blank" rel="noopener noreferrer" className="source-link">
                      SWK Technologies
                    </a>
                    <a href="https://www.cm-alliance.com/cybersecurity-blog/major-cyber-attacks-data-breaches-ransomware-attacks-in-january-2026" target="_blank" rel="noopener noreferrer" className="source-link">
                      CM-Alliance
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="monthly-card">
              <div className="monthly-header">
                <h3>Actualité – Février 2026</h3>
                <span className="monthly-date">Février 2026</span>
              </div>

              <div className="monthly-content">
                <div className="monthly-section">
                  <h4>Contexte</h4>
                  <p>
                    En février 2026, des spécialistes de la cybersécurité ont documenté une campagne d'attaques
                    utilisant des réseaux d'appareils compromis (IoT et routeurs SOHO) pour masquer l'origine des
                    attaques et rendre leur détection plus complexe. Cette technique illustre l'évolution des
                    stratégies offensives, où les appareils eux-mêmes deviennent des composants d'infrastructures
                    malveillantes plutôt que de simples victimes isolées.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Comment ?</h4>
                  <p>
                    Les attaquants ont mis en place des <strong>réseaux maillés d'appareils compromis</strong>,
                    intégrant des objets connectés, des routeurs domestiques et des serveurs VPS, afin de relayer
                    le trafic malveillant et dissimuler ses sources réelles. Cette méthode rend la traçabilité
                    extrêmement difficile pour les équipes de sécurité, et permet d'exécuter des attaques tout
                    en évitant la détection.
                  </p>
                  <p>
                    Ces réseaux, connus sous le nom d'<strong>ORB Networks</strong>, ont été observés liés à une
                    campagne ciblée contre des opérateurs de télécommunications, exploitant aussi des vulnérabilités
                    zero-day dans leurs infrastructures. Cela montre comment des appareils connectés peuvent être
                    exploités en tant qu'outils d'attaque contre d'autres systèmes.
                  </p>
                </div>

                <div className="monthly-section">
                  <h4>Solutions de sécurité</h4>
                  <p>
                    Face à ce type de menace, il devient indispensable de :
                  </p>
                  <ul className="methods-list">
                    <li><strong>durcir la configuration des appareils réseau et IoT</strong> (changer les mots de passe par défaut, fermer les ports non nécessaires)</li>
                    <li><strong>surveiller et segmenter les réseaux</strong> pour détecter des comportements anormaux</li>
                    <li><strong>maintenir à jour les firmwares et correctifs</strong> des appareils</li>
                    <li>utiliser des <strong>solutions de détection basées sur l'analyse comportementale</strong> plutôt que sur des signatures statiques</li>
                  </ul>
                  <p>
                    Cette actualité illustre que la sécurité des appareils ne se limite plus à la protection de
                    l'appareil lui-même, mais qu'elle doit intégrer la résilience de tout l'environnement réseau
                    face à des attaques de plus en plus sophistiquées.
                  </p>
                </div>

                <div className="monthly-sources">
                  <h4>Sources</h4>
                  <div className="source-links">
                    <a href="https://cybersecuritynews.com/orb-networks-mask-cyberattacks/" target="_blank" rel="noopener noreferrer" className="source-link">
                      Cybersecurity News
                    </a>
                    <a href="https://www.lemagit.fr/actualites/366639287/LIA-generative-au-service-des-cybercriminels-un-exemple-bien-concret" target="_blank" rel="noopener noreferrer" className="source-link">
                      LeMagIT
                    </a>
                    <a href="https://www.darkreading.com/threat-intelligence/600-fortigate-devices-hacked-ai-amateur" target="_blank" rel="noopener noreferrer" className="source-link">
                      DarkReading
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
