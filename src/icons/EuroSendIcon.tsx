import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EuroSendIcon({ iconName = 'euro-send', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
