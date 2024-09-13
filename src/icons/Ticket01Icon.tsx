import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Ticket01Icon({ iconName = 'ticket-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
