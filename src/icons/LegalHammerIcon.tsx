import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LegalHammerIcon({
  iconName = 'legal-hammer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
