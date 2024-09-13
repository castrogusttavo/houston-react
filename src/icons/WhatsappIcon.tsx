import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WhatsappIcon({ iconName = 'whatsapp', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
