use anchor_lang::prelude::*;

declare_id!("RdLv4EnP3EYz9J7qh7YfFGyf6emEgysvA1asA6fFkmS");

#[program]
pub mod sol_talks {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
