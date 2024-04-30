import React from 'react';

type Proposal = {
  proposalId: string;
  nftTokenId: string;
  deadline: Date;
  yayVotes: string;
  nayVotes: string;
  executed: boolean;
};

type ViewProposalsProps = {
  proposals: Proposal[];
  voteOnProposal: (proposalId: string, vote: 'YAY' | 'NAY') => void;
  executeProposal: (proposalId: string) => void;
};

const ViewProposals: React.FC<ViewProposalsProps> = ({ proposals, voteOnProposal, executeProposal }) => {
  if (!proposals.length) {
    return <div>No proposals have been created</div>;
  }

  return (
    <div>
      {proposals.map((proposal, index) => (
        <div key={index} className="">
          <p className='my-2'>Proposal ID: {proposal.proposalId}</p>
          <p className='my-2'>Fake NFT to Purchase: {proposal.nftTokenId}</p>
          <p className='my-2'>Deadline: {proposal.deadline.toLocaleString()}</p>
          <p className='my-2'>Yay Votes: {proposal.yayVotes}</p>
          <p className='my-2'>Nay Votes: {proposal.nayVotes}</p>
          <p className='my-2'>Executed?: {proposal.executed.toString()}</p>
          <div>
            {!proposal.executed && (
              <>
                <button onClick={() => voteOnProposal(proposal.proposalId, "YAY")}>Vote YAY</button>
                <button onClick={() => voteOnProposal(proposal.proposalId, "NAY")}>Vote NAY</button>
                {proposal.deadline < new Date() && (
                  <button onClick={() => executeProposal(proposal.proposalId)}>Execute Proposal</button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewProposals