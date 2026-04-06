// Named imports from individual client files
import { slug as vodafoneSlug, clientName as vodafoneName, vodafoneProjects } from "../strategy/data/vodafone";
import { slug as ptclSlug, clientName as ptclName, ptclProjects } from "../strategy/data/ptcl";
import { slug as safaricomSlug, clientName as safaricomName, safaricomProjects } from "../strategy/data/safaricom";
import { slug as etisalatSlug, clientName as etisalatName, etisalatProjects } from "../strategy/data/etisalat";
import { slug as pepsicoSlug, clientName as pepsicoName, pepsicoProjects } from "../strategy/data/pepsico";
import {
  slug as nikeSlug,
  clientName as nikeName,
  nikeProjects
} from "../strategy/data/nike";
import {
  slug as workdaySlug,
  clientName as workdayName,
  workdayProjects
} from "../strategy/data/workday";
import { slug as cvsSlug, clientName as cvsName, cvsProjects } from "../strategy/data/cvs";
import { slug as intelSlug, clientName as intelName, intelProjects } from "../strategy/data/intel";
import {
  slug as amazonSlug,
  clientName as amazonName,
  amazonProjects
} from "../strategy/data/amazon";
import {
  slug as optimumSlug,
  clientName as optimumName,
  optimumProjects
} from "../strategy/data/optimum";
import {
  slug as walmartSlug,
  clientName as walmartName,
  walmartProjects
} from "../strategy/data/walmart";
import {
  slug as pinecrowSlug,
  clientName as pinecrowName,
  pinecrowProjects
} from "../strategy/data/pinecrow";
import {
  slug as samsungSlug,
  clientName as samsungName,
  samsungProjects
} from "../strategy/data/samsung";
import {
  slug as microsoftSlug,
  clientName as microsoftName,
  microsoftProjects
} from "../strategy/data/microsoft";
import {
  slug as macysSlug,
  clientName as macysName,
  macysProjects
} from "../strategy/data/macy";
import {
  slug as adobeSlug,
  clientName as adobeName,
  adobeProjects
} from "../strategy/data/adobe";
import {
  slug as ciscoSlug,
  clientName as ciscoName,
  ciscoProjects
} from "../strategy/data/cisco";
import {
  slug as flagstarSlug,
  clientName as flagstarName,
  flagstarProjects
} from "../strategy/data/flagstar";

// Wrap each client into a single object with projects
const vodafoneClient = {
  slug: vodafoneSlug,
  clientName: vodafoneName,
  projects: vodafoneProjects,
};

const ptclClient = {
  slug: ptclSlug,
  clientName: ptclName,
  projects: ptclProjects,
};

const safaricomClient = {
  slug: safaricomSlug,
  clientName: safaricomName,
  projects: safaricomProjects,
};

const etisalatClient = {
  slug: etisalatSlug,
  clientName: etisalatName,
  projects: etisalatProjects,
};

const pepsicoClient = {
  slug: pepsicoSlug,
  clientName: pepsicoName,
  projects: pepsicoProjects,
};
const nikeClient = {
  slug: nikeSlug,
  clientName: nikeName,
  projects: nikeProjects,
};

const workdayClient = {
  slug: workdaySlug,
  clientName: workdayName,
  projects: workdayProjects,
};

const cvsClient = {
  slug: cvsSlug,
  clientName: cvsName,
  projects: cvsProjects,
};

const intelClient = {
  slug: intelSlug,
  clientName: intelName,
  projects: intelProjects,
};

const amazonClient = {
  slug: amazonSlug,
  clientName: amazonName,
  projects: amazonProjects,
};

const optimumClient = {
  slug: optimumSlug,
  clientName: optimumName,
  projects: optimumProjects,
};

const walmartClient = {
  slug: walmartSlug,
  clientName: walmartName,
  projects: walmartProjects,
};

const pinecrowClient = {
  slug: pinecrowSlug,
  clientName: pinecrowName,
  projects: pinecrowProjects,
};

const samsungClient = {
  slug: samsungSlug,
  clientName: samsungName,
  projects: samsungProjects,
};

const microsoftClient = {
  slug: microsoftSlug,
  clientName: microsoftName,
  projects: microsoftProjects,
};

const macysClient = {
  slug: macysSlug,
  clientName: macysName,
  projects: macysProjects,
};


const adobeClient = {
  slug: adobeSlug,
  clientName: adobeName,
  projects: adobeProjects,
};

const ciscoClient = {
  slug: ciscoSlug,
  clientName: ciscoName,
  projects: ciscoProjects,
};

const flagstarClient = {
  slug: flagstarSlug,
  clientName: flagstarName,
  projects: flagstarProjects,
};

// Add all clients to the array
export const allClients = [
  vodafoneClient,
  ptclClient,
  safaricomClient,
  etisalatClient,
  pepsicoClient,
  nikeClient,
  workdayClient,
  cvsClient,
  intelClient,
  amazonClient,
  optimumClient,
  walmartClient,
  pinecrowClient,
  samsungClient,
  microsoftClient,
  macysClient,
  adobeClient,
  ciscoClient,
  flagstarClient
];

// Function to fetch client by slug
// export function getClientData(slug: string) {
//   return allClients.find(c => c.slug.toLowerCase() === slug.toLowerCase()) || null;
// }

export function getClientData(slug: string) {
  const normalizedSlug = decodeURIComponent(slug)
    .toLowerCase()
    .normalize("NFKD")                
    .replace(/[\u2018\u2019]/g, "")    
    .replace(/[^a-z0-9-]/g, "");       

  return (
    allClients.find(
      c => c.slug.toLowerCase() === normalizedSlug
    ) || null
  );
}
