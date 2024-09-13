import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrisonerIcon({ iconName = 'prisoner', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
