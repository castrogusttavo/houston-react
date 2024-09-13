import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hdr01Icon({ iconName = 'hdr-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
