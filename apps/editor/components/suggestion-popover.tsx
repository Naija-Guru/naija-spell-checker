import React from 'react';
import { VirtualElement } from '@floating-ui/dom';

import { Button, Popover } from '@naija-spell-checker/ui';

import { TSuggestion } from '@/models/suggestion';

export function SuggestionPopover({
  isOpen,
  toggle,
  elementId,
  suggestion,
  anchorRef,
  onApplySuggestion,
}: {
  isOpen: boolean;
  suggestion: TSuggestion;
  anchorRef: VirtualElement | null;
  elementId: string;
  toggle: (open: boolean) => void;
  onApplySuggestion: (elementId: string, suggestion: TSuggestion) => void;
}) {
  return (
    <Popover open={isOpen} toggleOpen={toggle} virtualAnchor={anchorRef}>
      <h4 className="mb-2">Suggestion</h4>
      <p className="text-primary font-bold text-xl mb-2">
        {suggestion.replacements[0].value}
      </p>
      <p className="text-xs mb-4">{suggestion.message}</p>
      <Button onClick={() => onApplySuggestion(elementId, suggestion)}>
        Accept Suggestion
      </Button>
    </Popover>
  );
}
