import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EcoPowerIcon({ iconName = 'eco-power', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
